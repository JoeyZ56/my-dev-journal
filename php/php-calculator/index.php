<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<link rel="stylesheet" href="style.css">
<body>
<div class="formContainer">
    <h1 class="title">Calculator</h1>
    
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
<input class="input" type="number" name="num01" placeholder="Number One">
<select class="options" name="operator">
    <option value="add">+</option>
    <option value="sub">-</option>
    <option value="mul">*</option>
    <option value="div">/</option>

</select>
<input class="input" type="number" name="num02" placeholder="Number Two"> </br>
<button class="btn" type="submit" name="submit" value="submit">Calculate</button>
    </form>
    </div>

    <?php 

        //grabs data from inputs

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //sanitized data by using filter_input() function
        $number1 = filter_input(INPUT_POST, 'num01', 
        FILTER_SANITIZE_NUMBER_FLOAT);
        $number2 = filter_input(INPUT_POST, 'num02', 
        FILTER_SANITIZE_NUMBER_FLOAT);
        $operator = htmlspecialchars($_POST['operator']);

        //error handlers
        $erros = false;

        //check if inputs are empty
        if (empty($number1) || empty($number2) || empty($operator)) {
            echo "<p class='calc-error'>Please fill out all fields!</p>";

            $errors = true;
        }

        if (!is_numeric($number1) || !is_numeric($number2)) {
            echo "<p class='calc-error'>Only use numbers!</p>";

            $errors = true;
        }

        // calculate numbers if no errors
        if (!$errors) {
            // float data type
            $value = 0;
            switch ($operator) {
                case 'add':
                    $value = $number1 + $number2;
                    break;
                case 'subtract':
                    $value = $number1 - $number2;
                    break;
                case 'multiply':
                    $value = $number1 * $number2;
                    break;
                case 'divide':
                    $value = $number1 / $number2;
                    break;

                    default: 
                    echo "<p class='calc-error'>Something went wrong!</p>";
            }
            //if its incased in double "" use single '' inside the echo to not get error
            //"concatenate" the value to the string
            echo "<P class='result'>" . $value . "</P>";
        }


    }
    ?>
</body>
</html>

<?php

?>

<!-- Notes:
- Always sanitize data submitted by users before using it in your application. 
- Always use security with php


-->