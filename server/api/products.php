<?php

if($request['method']==='GET'){
  $link = get_db_link();
  $itemId = $request['query']['productId'];
  if(!empty($itemId)){
    $products = one_product_detail($link, $itemId);
  } else {
    $products = get_products($link);
  }
  $response['body'] = $products;
  send($response);
}

function get_products($link){
  $sql = "SELECT `productId`, `name`, `price`, `image`, `shortDescription` FROM `products`";
  $link->query($sql);
  $result = mysqli_query($link, $sql);
  $products_list = [];
  while ($row = mysqli_fetch_assoc($result)){
    array_push($products_list, $row);
  }
  return $products_list;
}

function one_product_detail($link, $itemId){
  if($_GET['productId'] >= 1){
    $sqlId = "SELECT * FROM `products` WHERE `productId`=$itemId";
    $link -> query($sqlId);
    $idResult = mysqli_query($link, $sqlId);
    $productOutcome = mysqli_fetch_assoc($idResult);
  } else if($_GET['productId'] <= 0 || !is_numeric($_GET['productId'])){
    throw new ApiError("Product ID $itemId is not a valid ID", 400);
  }
  if (!$productOutcome) {
    throw new ApiError("Product ID $itemId does not exist", 404);
  }
  return $productOutcome;
}
