document.write("1.to check whether an `input` is an array or not"+"<br>");
function test(a)
{
    if(typeof a== "object")
    {
        return true;
    }
    return false;
}
document.write("[1,2,3,4] : "+test([1,2,3,4])+"<br>");
document.write("sanjeev : "+test("sanjeev")+"<br><br>");