<?php
    $checkinDate = $_POST['checkin']; 
    $checkoutDate = $_POST['checkout']; 
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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='UTF-8'>
    <title>Confirmation</title>
    <link href="styles.css" rel="stylesheet"/>
</head>

<body>
    <header>
            <div class="logo" id='greetings'></div>   
    </header>
    <div id="line-seperator"> </div>

    <h2 id='thankYou'>
        Thank you for submitting your travel agent
        contact request! Here is the information you submitted:
    </h2>

    <h4>Client Name: </h4>
    <div class='formOutput'>
        <?php echo $_POST["fname"] . ' ' . $_POST["Lname"]; ?>
    </div>
    
    <h4>Client Phone Number:</h4>
    <div class='formOutput'>
        <?php echo $_POST['phoneNum'];?> 
    </div>

    <h4>Client email address:</h4>
    <div class='formOutput'>
        <?php echo $_POST["email"]; ?>
    </div>
    
    <h4>There are </h4>
    <div class='formOutput'>
        <?php echo $_POST["adultCount"];?> adults traveling 
    </div>

    <h4>There are </h4>
    <div class='formOutput'>
        <?php echo $_POST["kidCount"];?> children traveling 
    </div>
    
    <h4>You are  traveling to</h4>
    <div class='formOutput'>
        <?php echo $_POST["city"]; ?>
    </div>

    <h4>Your check in date is </h4>
    <div class='formOutput'>
        <?php echo newDateFormat($checkinDate);?>
    </div>

    <h4>Your check out date is</h4>
    <div class='formOutput'>
        <?php echo newDateFormat($checkoutDate);?>
    </div>

    <h4>You chose the following activity/activities: </h4>
    <div class='formOutput'>
    <?php 
        $name = $_POST['outing'];

        foreach ($name as $outing){
        echo '<li>'  . $outing;
        }
    ?>
    </div>
    
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