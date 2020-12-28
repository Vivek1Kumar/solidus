import React from 'react';
import './mugs.css';
function mugs() {
    
    return (
        <main className="container">
            <div class="breadcrumbs">
                <nav class="breadcrumbs__content">
                    <ol itemscope="itemscope" className='d-flex' itemtype="https://schema.org/BreadcrumbList">
                        <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
                            <a itemprop="item" href="/">
                                <span itemprop="name">Home</span>
                                <meta itemprop="position" content="1" />
                            </a>&nbsp;»&nbsp;
                        </li>
                        <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
                            <a itemprop="item" href="/products">
                                <span itemprop="name">Products</span>
                                <meta itemprop="position" content="2" />
                            </a>&nbsp;»&nbsp;
                        </li>
                        <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
                            <a itemprop="item" href="/t/categories">
                                <span itemprop="name">Categories</span>
                                <meta itemprop="position" content="3" />
                            </a>&nbsp;»&nbsp;
                        </li>
                        <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
                            <a itemprop="item" href="/t/categories/bags">
                                <span itemprop="name">Bags</span>
                                <meta itemprop="position" content="4" />
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="d-flex">
                <aside>
                    <nav class="">
                        <h6 class="pl-3">Shop by Categories</h6>
                        <ul class="taxonomy__list">
                            <li class="current"><a href="/t/categories/bags">Bags</a></li>
                            <li><a href="/t/categories/t-shirts">T-Shirts</a></li>
                            <li><a href="/t/categories/shirts">Shirts</a></li>
                            <li><a href="/t/categories/mugs">Mugs</a></li>
                            <li><a href="/t/categories/hoodie">Hoodie</a></li>
                            <li><a href="/t/categories/clothing">Clothing</a></li>
                            <li><a href="/t/categories/caps">Caps</a></li>
                        </ul>
                        <h6 class="pl-3">Shop by Brand</h6>
                        <ul class="taxonomy__list">
                            <li><a href="/t/brand/solidus">Solidus</a></li>
                            <li><a href="/t/brand/ruby">Ruby</a></li>
                        </ul>
                    </nav>
                    <form id="sidebar_products_search">
                        <input type="hidden" name="per_page" id="per_page"  />
                            <h6 class="pl-3">Price Range</h6>
                            <ul class="taxonomy__list">
                                <li>
                                    <input type="checkbox" name="search[price_range_any][]" id="Price_Range_Under_$10.00" value="Under $10.00" />
                                        <label for="Price_Range_Under_$10.00">Under $10.00</label>
                                 </li>
                                <li>
                                     <input type="checkbox" name="search[price_range_any][]" id="Price_Range_$10.00_-_$15.00" value="$10.00 - $15.00" />
                                     <label for="Price_Range_$10.00_-_$15.00">$10.00 - $15.00</label>
                                </li>
                                <li>
                                     <input type="checkbox" name="search[price_range_any][]" id="Price_Range_$15.00_-_$18.00" value="$15.00 - $18.00" />
                                     <label for="Price_Range_$15.00_-_$18.00">$15.00 - $18.00</label>
                                </li>
                                <li>
                                     <input type="checkbox" name="search[price_range_any][]" id="Price_Range_$18.00_-_$20.00" value="$18.00 - $20.00" />
                                     <label for="Price_Range_$18.00_-_$20.00">$18.00 - $20.00</label>
                                </li>
                                <li>
                                     <input type="checkbox" name="search[price_range_any][]" id="Price_Range_$20.00_or_over" value="$20.00 or over" />
                                         <label for="Price_Range_$20.00_or_over">$20.00 or over</label>
                                </li>
                            </ul>
                        <button type="submit" class="btn btn-primary round-0">Search</button>
                    </form>
                </aside>
                <section className='rowss'>
                    <h4 class="pl-4 pr-4">Bags</h4>
                    <ul class="products-grids row">
                        <li class="product-card col-md-3" itemscope="" itemtype="http://schema.org/Product" id="product_11">
                            <article>
                                <section class="product-card_image">
                                    <a href="/products/solidus-tote?taxon_id=5">
                                        <img class="" width="100%" src="https://res.cloudinary.com/hl3m5fihu/image/upload/v1/spree/products/51/small/tote_bag_solidus.jpg " />
                                    </a>
                                </section>
                                <header class="product-card_header">
                                    <h2>
                                        <a class="info" itemprop="name" title="Solidus Tote" href="/products/solidus-tote?taxon_id=5">Solidus Tote</a>
                                    </h2>
                                </header>
                                <section class="product-card_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                    <span class="price selling" itemprop="price" content="15.99">
                                        <span class="money-currency-symbol">$</span><span class="money-whole">15</span><span class="money-decimal-mark">.</span><span class="money-decimal">99</span>
                                    </span>
                                    <span itemprop="priceCurrency" content="USD"></span>
                                </section>
                            </article>
                        </li>
                        <li class="product-card col-md-3" itemscope="" itemtype="http://schema.org/Product" id="product_12">
                            <article>
                                <section class="product-card_image">
                                    <a itemprop="url" href="/products/ruby-tote?taxon_id=5">
                                        <img itemprop="image" width="100%" class="" src="https://res.cloudinary.com/hl3m5fihu/image/upload/v1/spree/products/52/small/tote_bag_ruby.jpg" />
                                    </a>
                                </section>
                                <header class="product-card_header">
                                    <h2>
                                        <a class="info" itemprop="name" title="Ruby Tote" href="/products/ruby-tote?taxon_id=5">Ruby Tote</a>
                                    </h2>
                                </header>
                                <section class="product-card_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                    <span class="price selling" itemprop="price" content="15.99">
                                        <span class="money-currency-symbol">$</span><span class="money-whole">15</span><span class="money-decimal-mark">.</span><span class="money-decimal">99</span>
                                    </span>
                                    <span itemprop="priceCurrency" content="USD"></span>
                                </section>
                            </article>
                        </li>
                    </ul> 
                </section>
            </div>
        </main>
    );
}

export default mugs;