class Items {
    constructor() {
        this.itemsContainer = document.querySelector('.items');
        this.itemSample = document.querySelector('.item');
        this.pageCount = 1;
        this.countItems = 0;

        this.loadMoreBtn = document.querySelector('.load-more');
        this.loadMoreBtn.addEventListener('click', this.userEvent.bind(this));

        this.setItems();
    }

    setItems() {
        if (this.totalItems === this.countItems) {
            this.loadMoreBtn.setAttribute('style', 'display: none');
            return false;
        }

        this.addItems();
    }

    addItems() {
        this.getItems().then((items) => {
            this.totalItems = items.total;
            this.countItems += items.entities.length;

            items.entities.forEach((item) => {

                let title = item.title;
                let description = item.description;
                let cost = item.cost;
                let discountCost = item.discountCost;
                let isNew = item.new;
                let itemImg = item.img;

                this.newItem = this.itemSample.cloneNode(true);
                this.imgAndBadgeContainer = this.newItem.querySelector('.item-image');

                this.newItem.querySelector('.item-title').innerText = title;
                this.newItem.querySelector('.item-description').description = title;
                this.newItem.querySelector('.item-image > img').setAttribute('src', `${itemImg}`);

                this.costHandler(discountCost, cost);
                this.badgeHandler(isNew);

                this.newItem.setAttribute('style', 'display: none');
                this.newItem.classList.add('loaded');
                this.itemsContainer.appendChild(this.newItem);
            })
        });
    }

    badgeHandler(isNew) {
        let badgeNew = this.newItem.querySelector('.badge-new');

        if (!isNew && badgeNew) {
            this.imgAndBadgeContainer.removeChild(badgeNew);
        } else if (isNew && !badgeNew) {
            this.createDivElement(this.imgAndBadgeContainer, '', 'new');
        }
    }

    costHandler(discountCost, cost) {
        let pricePast = this.newItem.querySelector('.price-past');
        let pricesDiv = this.newItem.querySelector('.prices');

        if (discountCost) {
            this.newItem.querySelector('.price-actual').innerText = `${discountCost}`;

            if (!pricePast) {
                this.createDivElement(pricesDiv, 'price-past');
                this.createDivElement(this.imgAndBadgeContainer, 'badge-sale', 'sale');
            }

            this.newItem.querySelector('.price-past').innerText = `${cost}`;
        } else {
            this.newItem.querySelector('.price-actual').innerText = `${cost}`;
            if (pricePast) {
                pricesDiv.removeChild(pricePast);
                let oldSale = this.newItem.querySelector('.badge-sale');
                this.imgAndBadgeContainer.removeChild(oldSale);
            }
        }
    }

    createDivElement(parenrt, className, text) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', className);
        text ? newDiv.innerText = text : null;
        parenrt.appendChild(newDiv);
    }

    userEvent() {
        let hiddenItems = this.itemsContainer.querySelectorAll('.loaded[style="display: none"]');
        this.addLoader(hiddenItems);
        this.displayHiddenItems(hiddenItems);
        this.pageCount++;
        this.setItems();
    }

    addLoader() {
        let loadedItem = this.itemsContainer.querySelector('.loaded');

        if (!loadedItem) {
            let loader = document.createElement('img');
            loader.setAttribute('src', 'img/spinner.gif');
            loader.setAttribute('class', 'spinner');

            let itemsField = document.querySelector('.items-container');
            itemsField.insertBefore(loader, itemsField.childNodes[2]);

            let loadInterval = setInterval(() => {
                let items = this.itemsContainer.querySelectorAll('.item');
                let loadedItem = items[items.length-1].hasAttribute('style');
                let hiddenItems = this.itemsContainer.querySelectorAll('[style="display: none"]');
                if (loadedItem) {
                    itemsField.removeChild(loader);
                    this.displayHiddenItems(hiddenItems);
                    clearInterval(loadInterval);
                }
            }, 1);
        }
    }

    displayHiddenItems(hiddenItems) {
        hiddenItems.forEach((item) => {
            item.setAttribute('style', 'display: block');
            item.classList.add('fadein');
        });
    }

    getItems() {
        let xhr = new XMLHttpRequest();
        let param;

        xhr.open('GET', `/list.php?page=${this.pageCount}`, true);
        xhr.send();

        this.getJSON = new Promise ((res, rej) => {
            xhr.onreadystatechange = function() {
                if (xhr.status !== 200) {
                    rej(new Error('Response for items JSON is not correct'));
                } else {
                    res(JSON.parse(xhr.responseText));
                }
            };
        });
        return this.getJSON;
    }
}

new Items();
