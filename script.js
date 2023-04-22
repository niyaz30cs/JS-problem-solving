const str="abcadeecfb";

const myset=new Set(str);

for(var alphabet of myset)
{
    console.log(...myset);
}

var str1="abcadeecfb";
 const mymap=new Map();

 for(var alphabet1 of str1)
 {
    if(mymap.has(alphabet1))
    {
        mymap.set(alphabet1,mymap.get(alphabet1)+1);
    }
    else
    {
        mymap.set(alphabet1,1);
    }
 }
 console.log(mymap);