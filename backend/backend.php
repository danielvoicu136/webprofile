<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "daadtwmo_daniel"; 
$password = "ADMIN93x@";     
$dbname = "daadtwmo_daniel";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM messages ORDER BY date ASC");
    $messages = [];
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
    echo json_encode($messages);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['name']) || !isset($data['message'])) {
        echo json_encode(["error" => "Invalid input"]);
        exit;
    }

    $name = $conn->real_escape_string($data['name']);
    $message = $conn->real_escape_string($data['message']);
    $date = date('Y-m-d H:i:s');

    $sql = "INSERT INTO messages (name, message, date) VALUES ('$name', '$message', '$date')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => "Message sent successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>
