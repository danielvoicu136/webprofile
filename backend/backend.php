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

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'getMessages') {
    $result = $conn->query("SELECT * FROM messages ORDER BY date ASC");
    $messages = [];

    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }

    echo json_encode($messages);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'addMessage') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['name']) || !isset($data['message']) || !isset($data['translated'])) {
        echo json_encode(["error" => "Invalid input"]);
        exit;
    }

    $name = $conn->real_escape_string($data['name']);
    $message = $conn->real_escape_string($data['message']);
    $translated = $conn->real_escape_string($data['translated']);
    $date = date('Y-m-d H:i:s');

    $sql = "INSERT INTO messages (name, message, translated, date) VALUES ('$name', '$message', '$translated', '$date')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => "Message sent successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $conn->error]);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'getCounter') {
    $result = $conn->query("SELECT count FROM visits WHERE id = 1");

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode(["visits" => intval($row["count"])]);
    } else {
        echo json_encode(["visits" => 0]);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'addCounter') {
    $result = $conn->query("SELECT count FROM visits WHERE id = 1");

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $newCount = intval($row["count"]) + 1;

        if ($conn->query("UPDATE visits SET count = $newCount WHERE id = 1") === TRUE) {
            echo json_encode(["visits" => $newCount]);
        } else {
            echo json_encode(["error" => "Database update failed"]);
        }
    } else {
        $conn->query("INSERT INTO visits (count) VALUES (1)");
        echo json_encode(["visits" => 1]);
    }
    exit;
}

$conn->close();
?>
