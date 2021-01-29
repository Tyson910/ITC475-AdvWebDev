
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='UTF-8'>
    <title>Confirmation</title>
    <link href="phpstyles.css" rel="stylesheet"/>
</head>

<body>
    <header>
            <div class="logo" id='greetings'></div>   
    </header>
    <div id="line-seperator">. </div>

    <h2>
        Thank you for submitting your travel agent
        contact request! Here is the information you submitted:
    </h2>
    
    <section>
    <?php
    if(!$emailError){
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

        $sql = "SELECT id, firstname, lastname, phoneNum, email,
        checkinDate, checkoutDate, kidCount, adultCount, city,
        activities FROM Customer";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo 
                "<h3>"."Customer ID: " . $row["id"].  "</h3>" . 
                "<div class='client-output'>".
                "<h4> Client Name: </h4>" . $row["firstname"]." " . $row["lastname"]. 
                '<h4> Client Phone Num:</h4>' . $row["phoneNum"]. 
                '<h4> Client Email:</h4>' . $row["email"].
                '<h4> Client Check in Date:</h4>' . $row["checkinDate"].
                '<h4> Client Check out Date:</h4>' .$row["checkoutDate"]. 
                '<h4> Number of Children:</h4>' . $row["kidCount"]. 
                '<h4> Number of adults:</h4>' . $row["adultCount"]. 
                '<h4> Destination:</h4>' . $row["city"]. 
                '<h4>Interested activites:</h4>' . $row["activities"]. 
                "</div>";
        }
        } else {
        echo "0 results";
        }
        $conn->close();

    }
        ?> 
    </section>
    




    <footer>
            <div>Copyright Protected. All rights reserved</div>
            <br>
            <div>mega travels</div>
            <address>
                <a href="mailto:mega@travels.com"> Mega@travels.com</a>
            </address>
    </footer>
</body>
</html>