<?php
include 'database.php';
?>

<?php
if($_POST['fname'])
{
    $fname = $_POST['fname'];
    $sname = $_POST['sname'];
    $datefrom = $_POST['datefrom'];
    $dateto = $_POST['dateto'];
    $room = $_POST['room'];
    $people = $_POST['people'];

    $sql= "INSERT INTO `houses` (`fname`, `sname`, `datefrom`, `dateto`, `people`, `name`) VALUES ('$fname', '$sname', '$datefrom', '$dateto', '$people', '$room')";

    if ($conn->query($sql) === TRUE) 
    {
        echo json_encode("true");
    } else 
    {
        echo json_encode("false");
    }
    $conn->close();
}
else
{
    echo 'Error';
}
?>