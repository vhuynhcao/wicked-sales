<?php

if($request['method']==='GET'){
  $link = get_db_link();
  $products = get_products($link);
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
