<html>
<section class="product-details">
    <div class="image-slider">
        <div class="product-images">
            <img src="img/product image 1.png" class="active" alt="">
            <img src="img/product image 2.png" alt="">
            <img src="img/product image 3.png" alt="">
            <img src="img/product image 4.png" alt="">
        </div>
    </div>
</section>

<style>
.product-details{
    width: 100%;
    padding: 60px 10vw;
    display: flex;
    justify-content: space-between;
}

.image-slider{
    width: 500px;
    height: 500px;
    position: relative;
    background-image: url('../img/product\ image\ 1.png');
    background-size: cover;
}

.product-images{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    background: #fff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100px;
    grid-gap: 10px;
    padding: 10px;
}

.product-images img{
    width: 100%;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
}

.product-images img.active{
    opacity: 0.5;
}
</style>
</html>