<?php
    require __DIR__ . "/model.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test quiz</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="wrapper">
    <div class="main-container">
        <div class="items-container">
            <div class="items">
                <?php foreach ( getItems( 1, 8 ) as $item ): ?>
					<div class="item">
						<div class="item-image">
							<img src="<?php echo $item[ 'img' ]; ?>" alt="item image">
							<?php if ( $item[ 'discountCost' ] !== null ): ?>							
								<div class="badge-sale">
									<span>sale</span>
								</div>
							<?php endif; ?>
							<?php if ( $item[ 'new' ] ): ?>
								<div class="badge-new">
									<span>new</span>
								</div>
							<?php endif; ?>
						</div>
						<div class="item-title"><?php echo $item[ 'title' ]; ?></div>
						<p class="description"><?php echo $item[ 'description' ]; ?></p>
						<div class="prices">							
								<div class="price-actual">$<?php echo $item[ 'discountCost' ] ? $item[ 'discountCost' ] : $item[ 'cost' ]; ?></div>
							<?php if ( $item[ 'discountCost' ] !== null ): ?>
								<div class="price-past">$<?php echo $item[ 'cost' ]; ?></div>
							<?php endif; ?>
						</div>
						<div class="item-buttons">
							<button class="item-btn item-add-btn">add to cart</button>
							<button class="item-btn item-view-btn">view</button>
						</div>
					</div>
				<?php endforeach; ?>
            </div>
            <button class="load-more">load more</button>
        </div>
        <div class="footer">
            <div class="footer-item">
                <h3>hot offers</h3>
                <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse
                    sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hend.
                </p>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Nam elit magna hendrerit sit amet tincidunt ac</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Quisque diam lorem interdum vitae dapibus ac scele</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Donec eget tellus non erat lacinia fermentum</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Donec in velit vel ipsum auctor pulvin</p>
                    </li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>hot offers</h3>
                <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse
                    sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hend.
                </p>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Nam elit magna hendrerit sit amet tincidunt ac</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Quisque diam lorem interdum vitae dapibus ac scele</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Donec eget tellus non erat lacinia fermentum</p>
                    </li>
                    <li class="footer-list-item">
                        <img src="img/arrow-list.png" alt="" class="arrow-footer">
                        <p>Donec in velit vel ipsum auctor pulvin</p>
                    </li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>Store information</h3>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <div class="footer-img-list-container">
                            <img src="img/location.png" alt="" class="arrow-footer">
                        </div>
                        <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                    </li>
                    <li class="footer-list-item">
                        <div class="footer-img-list-container">
                            <img src="img/phone.png" alt="" class="arrow-footer">
                        </div>
                        <p>Call us now toll free: (800) 2345-6789</p>
                    </li>
                    <li class="footer-list-item">
                        <div class="footer-img-list-container">
                            <img src="img/mail.png" alt="" class="arrow-footer">
                        </div>
                        <div class="footer-inner-text">
                            <p>Customer support: support@example.com</p>
                            <p> Press: pressroom@example.com</p>
                        </div>
                    </li>
                    <li class="footer-list-item">
                        <div class="footer-img-list-container">
                            <img src="img/skype.png" alt="" class="arrow-footer">
                        </div>
                        <p>Skype: sample-username</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</body>
</html>