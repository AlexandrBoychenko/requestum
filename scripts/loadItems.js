class Items {
    constructor() {
        this.itemsContainer = document.querySelector('.items');
        this.itemSample = document.querySelector('.item');
        this.setItems();

        let loadMoreBtn = document.querySelector('.load-more');
        loadMoreBtn.addEventListener('click', this.userEvent.bind(this));
    }

    setItems() {
        this.getItems().then((items) => {
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

                this.coastHandler(discountCost, cost);
                this.badgeHandler(isNew);

                this.newItem.setAttribute('style', 'display: none');
                this.itemsContainer.appendChild(this.newItem);
            })
        })
    }

    badgeHandler(isNew) {
        let badgeNew = this.newItem.querySelector('.badge-new');

        if (!isNew && badgeNew) {
            this.imgAndBadgeContainer.removeChild(badgeNew);
        } else if (isNew && !badgeNew) {
            let badgeSample = document.createElement('div');
            badgeSample.innerText = 'new';
            this.imgAndBadgeContainer.appendChild(badgeSample);
        }
    }

    coastHandler(discountCost, cost) {
        let pricePast = this.newItem.querySelector('.price-past');
        let pricesDiv = this.newItem.querySelector('.prices');

        if (discountCost) {
            this.newItem.querySelector('.price-actual').innerText = `${discountCost}`;

            if (!pricePast) {

                let pricePastDiv = document.createElement('div');
                pricePastDiv.setAttribute('class', 'price-past');
                pricesDiv.appendChild(pricePastDiv);

                let badgeSale = document.createElement('div');
                badgeSale.setAttribute('class', 'badge-sale');
                badgeSale.innerText = "sale";
                this.imgAndBadgeContainer.appendChild(badgeSale);
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

    userEvent() {
        let hiddenItems = this.itemsContainer.querySelectorAll('[style="display: none"]');

        hiddenItems.forEach((item) => {
            item.setAttribute('style', 'display: block');
        })
    }

    getItems() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/list.php', true);
        xhr.send();

        return new Promise ((res, rej) => {
            xhr.onreadystatechange = function() {
                if (xhr.status !== 200) {
                    rej(new Error('Response for items JSON is not correct'));
                } else {
                    res(JSON.parse(xhr.responseText));
                }
            };
        })
    }
}

new Items();