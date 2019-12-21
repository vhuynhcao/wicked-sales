<?php

$link = get_db_link();
$cartId = $_SESSION['cart_id'];

if($request['method'] === 'POST'){
  if(!isset($cartId)){
    throw new ApiError('Inactive shopping cart', 400);
  } else {
    $name = $request['body']['name'];
    $creditCard = $request['body']['creditCard'];
    $shippingAddress = $request['body']['shippingAddress'];
    if (!isset($name)){
      throw new ApiError('Full name is needed', 400);
    }
    if (!isset($creditCard)){
      throw new ApiError('Credit card information is needed', 400);
    }
    if (!isset($shippingAddress)){
      throw new ApiError('Shipping information is needed', 400);
    }
    $insertOrder = "INSERT INTO orders (cartId, name, creditCard, shippingAddress)
                          VALUES (?, ?, ?, ?)";
    $prepareInsertOrder = mysqli_prepare($link, $insertOrder);
    $bindPrepare = mysqli_stmt_bind_param ($prepareInsertOrder, 'isis', $cartId, $name, $creditCard, $shippingAddress);
    $executePrepare = mysqli_stmt_execute($prepareInsertOrder);
    $orderId = mysqli_insert_id($link);
    $orderSql = "SELECT * FROM orders
                          WHERE orderId = $orderId";
    $orderResult = mysqli_query($link, $orderSql);
    $orderSqlResult = mysqli_fetch_assoc($orderResult);
    unset($_SESSION['cart_id']);
    $response['body'] = $orderSqlResult;
    send($response);
  }
}


?>
