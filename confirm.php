<?php

// define variables and set to empty values
$fname = $Lname = $email = $phoneNum =  "";
$city = $checkinDate = $checkoutDate = "";
$adultCount = $kidCount = $emailError = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fname = test_input($_POST["fname"]);
  $Lname = test_input($_POST["Lname"]);
  $email = test_input($_POST["email"]);
  $phoneNum = test_input($_POST["phoneNum"]);
  $city = test_input($_POST["city"]);
  $outingList = $_POST["outing"];
  $adultCount = test_input($_POST["adultCount"]);
  $kidCount = test_input($_POST["kidCount"]);
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    return $data;
}
//verfies email is in correct format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailError = "Invalid email format, the provided email: " . $email . 
    " is missing a domain name (.com/.edu/.net).".
    " This request will not be processed, ". 
    "click "."<a id='home-link' href='Contact.html'>here</a>". 
    " to resubmit form"; 
    }

    $checkinDate = test_input( $_POST['checkin']); 
    $checkoutDate = test_input($_POST['checkout']); 
    function newDateFormat($vacayDate){
        $vacayYear = substr($vacayDate, 0 ,4);
        $vacayMonth = substr($vacayDate, 5, 2);
        $vacayDay = substr($vacayDate, 8, 2);

        switch($vacayMonth){
            case '01':
                $vacayMonth ='Jan';
            break;
            case '02':
                $vacayMonth ='Feb';
            break;
            case '03':
                $vacayMonth ='March';
            break;
            case '04':
                $vacayMonth ='April';
            break;
            case '05':
                $vacayMonth='May';
            break;
            case '06':
                $vacayMonth ='June';
            break;
            case '07':
                $vacayMonth ='July';
            break;
            case '08':
                $vacayMonth ='Aug';
            break;
            case '09':
                $vacayMonth ='Sep';
            break;
            case '10':
                $vacayMonth='Oct';
            break;
            case '11':
                $vacayMonth='Nov';
            break;
            case '12':
                $vacayMonth='Dec';
            break;
        }
        return "$vacayMonth-$vacayDay-$vacayYear" ;
    }
?>

<?php
        $servername = "localhost";
        $username = "root";
        $password = "root";

        // Create connection
        $conn = new mysqli($servername, $username, $password);

        

        /*
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";
        */
        ?> 

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
    <h4>Client Name: </h4>
    <div class='formOutput'>
        <?php echo $fname . ' ' . $Lname ?>
    </div>
    
    <h4>Client Phone Number:</h4>
    <div class='formOutput'>
        <?php echo $phoneNum?> 
    </div>
    

    <h4>Client email address:</h4>
    <div class='formOutput'>
        <?php 
        if($emailError){
            echo "<div class='formOutput errorMsg'>".
            $emailError. "</div>" ;
        }
        else{
            echo "<div class='formOutput'>".
                $email . "</div>";
        }
         ?>
    </div>

    <h4>Your check in date is </h4>
    <div class='formOutput'>
        <?php echo newDateFormat($checkinDate);?>
    </div>

    <h4>Your check out date is</h4>
    <div class='formOutput'>
        <?php echo newDateFormat($checkoutDate);?>
    </div>

    <h4> Number of adults traveling </h4>
    <div class='formOutput'>
        <?php echo $adultCount ;?>
    </div>
    
    <h4> Number of children traveling </h4>
    <div class='formOutput'>
    <?php echo $kidCount ;?>
    
    </div>
    
    <h4>You are  traveling to</h4>
    <div class='formOutput'>
        <?php echo $city; ?>
    </div>

    <h4>You chose the following activity/activities: </h4>
    <div class='formOutput'>
    <?php 
        foreach ($outingList as $outing){
        echo '<li>'  . test_input($outing);
        }
    ?>
    </div>
    </section>
    
    <h2>An agent will be in touch with you soon!</h2>

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