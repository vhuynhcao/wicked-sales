<?php

$link = get_db_link();
$cartId = $_SESSION['cart_id'];

if($request['method'] === 'POST'){
  if(!isset($cartId)){
    throw new ApiError('Inactive shopping cart', 400);
  } else {
    $cartId = $_SESSION['cart_id'];
    $fullName = $request['body']['fullName'];
    $email = $request['body']['email'];
    $address1 = $request['body']['address1'];
    $address2 = $request['body']['address2'];
    $city = $request['body']['city'];
    $zip = $request['body']['zip'];
    $state = $request['body']['state'];
    $creditCard = $request['body']['creditCard'];
    $expMonth = $request['body']['expMonth'];
    $expYear = $request['body']['expYear'];
    $cvv = $request['body']['cvv'];
    if (!isset($fullName) || !isset($email) || !isset($address1) || !isset($address2) || !isset($city) || !isset($zip) || !isset($state) || !isset($creditCard) || !isset($expMonth) || !isset($expYear) || !isset($cvv)){
      throw new ApiError('Information is needed', 400);
    }
    $insertOrder = "INSERT INTO orders (cartId, fullName, email, address1, address2, city, zip, state, creditCard, expMonth, expYear, cvv)
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $prepareInsertOrder = mysqli_prepare($link, $insertOrder);
    $bindPrepare = mysqli_stmt_bind_param ($prepareInsertOrder, 'isssssisiiii', $cartId, $fullName, $email, $address1, $address2, $city, $zip, $state, $creditCard, $expMonth, $expYear, $cvv);
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
