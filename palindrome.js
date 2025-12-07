function anagram(s,t){
    s=s.split("").sort().join();
    t=t.split("").sort().join();
    console.log(s==t) ;
};
anagram("hey","yeh"); 