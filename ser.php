<?php
$name=$_POST["username"];
$pass=$_POST["pass"];
$arr=[];
if ($name=="mohamad"){
    $arr["username"]=true;

}else{
    $arr["username"]=false;

}
if ($pass=="123"){
    $arr["pass"]=true;

}else{
    $arr["pass"]=false;
}
print(json_encode($arr));