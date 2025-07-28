<?php
 
$host = "localhost";
$user = "root";
$password = "Nithin@2606";
$db = "referral_subscribers"; // Change this

$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("mainuserlist.html"));

$stmt = $conn->prepare("INSERT INTO referral_subscribers (date, referral_id, trading_view_id, phone_number, email, expiry_date, remaining_days) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssi", $data->date, $data->referral_id, $data->trading_view_id, $data->phone_number, $data->email, $data->expiry_date, $data->remaining_days);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}

$stmt->close();
$conn->close();

?>

