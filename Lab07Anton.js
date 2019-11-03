function problem1() {
var num = prompt("Please enter a number to see if it is prime");
var prime = true;
var d = 2;
while (prime == true && d<=(num/2)) {
    if ((num%d) == 0) {
        prime = false;
    }
    d = d+1;
}
if (prime==true) {
    alert(num + "is prime");
} else {
    alert(num + " is not prime")
}
}

function problem2() {
var sum1 = 0;
var sum2 = 0; 
var num;
var i;
for (i=1; i<=4; i++) {
    num = prompt("Please enter a number");
    sum1 = sum1+num; 
}
for (i=1; i<=4; i++) {
    num = prompt("Please enter a number");
    sum2 = sum2+num;
} 
if (sum1==sum2) {
    alert("yes");
} else {
    alert("no")
}
}

function problem3() {
var p = 0;
var n = 0;
var num;
do {
    num = prompt("enter a number");
    if (num>0) {
        p=p+1;
    } else {
        if (num<0) {
            n=n+1;
        }
    }
} while (num!=0 && p<=(2*n));
}

function problem4() {
var cnt1 = 0;
var cnt2 = 0;
var i;
var num;
for (i=1; i<=4; i++) {
    num = prompt("enter a number");
    if (num<0) {
        cnt1=cnt1+1;
    }
}
for (i=1; i<=4; i++) {
    num = prompt("enter a number");
    if (num>0) {
        cnt2=cnt2+1;
    }
}
if (cnt1==cnt2) {
    alert("Yes");
} else {
    alert("No");
}
}

function prime(num) {
    var flag = true;
    var d = 2;
    while (flag==true && d<=(num/2)) {
        if (num%d==0) {
            flag = false;
        }
        d=d+1;
    }
    return flag;
}
function problem5() {
    var num = prompt("Enter a number");
    for (var i = 2; i<=num; i++) {
        if (prime(i) == true) {
            alert(i);
        }
    }
}

function has7(num) {
    var num1 = num;
    var has7=false
    while (num1!=0)  {
        if ((num1%10)==7) {
            has7=true;
            break;
        }
        num1=parseInt(num1/10);
    } return has7; 

}
function problem6() {
var num = prompt("Enter a number");
var i = 1;
var numstring = "";
while (i<num) {
    if (has7(i) == true && prime(i) == true) {
        numstring = numstring + i + ", ";

    }
    i++;
} 
alert(numstring);
}