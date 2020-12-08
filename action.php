<?php

// define variables and set to empty values
$playername = $score = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $playername = test_input($_POST["username"]);
    $score = test_input($_POST["score"]);
    $today = getDate(date("U"));
    $gameDate = $today[month]. '-'. $today[mday] . '-' . $today[year];
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    return $data;
}
if($playername){
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = 'myDB';

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
    echo "Connection failed: " . $conn->connect_error;
    }

    // Create database 
    $sql = "CREATE DATABASE myDB";
    
    if ($conn->query($sql) === FALSE) {
        echo "";
        }

    

    mysqli_close($conn);

    // sql to create table
    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "CREATE TABLE HighScores (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    playername VARCHAR(32) NOT NULL,
    score VARCHAR(32) NOT NULL,
    gameDate VARCHAR(32)
    )";

    
    if ($conn->query($sql) === FALSE) {
    echo " ";
    }
    

    mysqli_close($conn);

    //insert data into table
    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "INSERT INTO HighScores (playername, score, gameDate)

    VALUES ('{$playername}', '{$score}', '{$gameDate}')";
    
    if (mysqli_query($conn, $sql) ===FALSE ) {
    echo "<br> Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    

    mysqli_close($conn);

}
    ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='UTF-8'>
    <title>High Scores</title>
    <link href="actionPHPstyles.css" rel="stylesheet"/>
</head>

<body>
    <?php 
    if ($playername){
        echo '<h2>'. 'Congratulations, ' . $playername . ' </h2>'.
            '<h2>'.'You finished in '. $score  .'</h2>'. 
            ' Please look below to see how you rank against other players!' . 
            '</div>';
    }


    ?>
    <table>
        <caption> High Scores </caption>
        <tr>
            <th id='username' scope='col'>Username</th>
            <th id='score' scope='col'>Score</th>
            <th id='date' scope='col'>Date</th>
        </tr>
    <?php 
            $servername = "localhost";
            $username = "root";
            $password = "root";
            $dbname = "myDB";
    
            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }
    
            $sql = "SELECT playername, score, gameDate FROM HighScores ORDER BY score LIMIT 10";
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo 
                    "<tr class='score-output'>".
                    "<td class='username-data'>" . $row["playername"].  " </td> " .
                    "<td class='score-data'> " . $row["score"]. "</td>".
                    "<td class='date-data'> " . $row['gameDate']. "</td>".  
                    "</tr>";
            }
            } else {
            echo "0 results";
            }
            $conn->close();
    
    ?>
    </table>

    <div class='button-holder'> 
    <a class='button-nav' href='index.html' id='home-link' > Home </a>
    </div>
</body>
</html>