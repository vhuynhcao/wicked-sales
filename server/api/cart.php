<?php

$link = get_db_link();

if($request['method'] === 'GET'){
  if(!isset($_SESSION['cart_id'])) {
    $response['body'] = [];
  } else {
    $cartId = $_SESSION['cart_id'];
    $cartInSess = "SELECT * FROM cartItems
                            JOIN products
                              ON cartItems.productId = products.productId
                           WHERE cartId = $cartId";
    $result = [];
    $sqlQuery = mysqli_query($link, $cartInSess);
    while($cartQuery = mysqli_fetch_assoc($sqlQuery)){
      $result[] = $cartQuery;
    }
    $response['body'] = $result;
  }
  send($response);
}

if($request['method'] === 'POST'){
  if(!isset($request['body']['productId']) || intval($request['body']['productId']) === 0){
    throw new ApiError("Product ID is not valid", 400);
  } else{
    $prodId = $request['body']['productId'];
    $priceSql = "SELECT price
                FROM products
                WHERE productId = $prodId";
    $priceResult = mysqli_fetch_assoc($link->query($priceSql));
    $priceArray = $priceResult['price'];
    if(!isset($_SESSION['cart_id'])){
      $createCartSql = "INSERT INTO carts (createdAt)
                        VALUES (CURRENT_TIMESTAMP)";
      $cartItemId = mysqli_query($link, $createCartSql);
      $cartInsertId = mysqli_insert_id($link);
    } else {
      $cartInsertId = $_SESSION['cart_id'];
    }
    $cartInfoSql = "INSERT INTO `cartItems` (cartId, productId, price)
                    VALUES ($cartInsertId, $prodId, $priceArray)";
    $cartInfo = mysqli_query($link, $cartInfoSql);
    $cartInfoInsert = mysqli_insert_id($link);
    $cartInfo = "SELECT p.name, p.productId, p.price, p.shortDescription, p.image, c.cartItemId
                  FROM products AS p
                  JOIN cartItems AS c
                  ON c.productId = p.productId
                  WHERE c.cartItemId = $cartInfoInsert";
    $cartResult = mysqli_fetch_assoc($link->query($cartInfo));
    $response['body'] = $cartResult;
    $_SESSION['cart_id'] = $cartInsertId;
    send($response);
  }
}
