<?php 
include 'database.php';
?>

<?php
if($_POST['peopleAmount'])
{
    $arrival = $_POST['arrival'];
    $departure = $_POST['departure'];
    $peopleAmount = $_POST['peopleAmount'];

    $sql = "SELECT name FROM houses WHERE people='$peopleAmount' AND ((dateFrom BETWEEN '$arrival' AND '$departure') OR (dateTo BETWEEN '$arrival' AND '$departure') OR (dateFrom < '$arrival' AND dateTo > '$departure'))";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {  
        $i = 0;
        while($row = $result->fetch_assoc()) 
        {
           $tablica[$i] = $row["name"];
            $i++;
        }

    echo json_encode($tablica);
    } 
    else 
    {
        echo json_encode("0 results");
    }
    unset($_POST['peopleAmount']);
    $conn->close();
}
else
{
    echo 'Error';
}
?>