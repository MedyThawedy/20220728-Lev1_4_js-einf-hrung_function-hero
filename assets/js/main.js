function fn_send(hname, hpower, henemy) {
    console.log('My favorite Marvel hero is: ' + hname);
    console.log('He/She has the ability: ' + hpower);
    console.log('His/Her biggest enemy is: ' + henemy);

    document.getElementById('output').innerHTML = ('My favorite Marvel hero is: ' + hname)
        + '  ' + ('He/She has the ability: ' + hpower)
        + '  ' + ('His/Her biggest enemy is: ' + henemy);
}

/* My favorite Marvel hero is:
He/She has the ability:
His/Her biggest enemy is:
 */



// Arrow function

let arrow_fn_send = (hname, hpower, henemy) => {
    console.log('My favorite Marvel hero is: ' + hname);
    console.log('He/She has the ability: ' + hpower);
    console.log('His/Her biggest enemy is: ' + henemy);

    document.getElementById('output').innerHTML = ('My favorite Marvel hero is: ' + hname)
        + '  ' + ('He/She has the ability: ' + hpower)
        + '  ' + ('His/Her biggest enemy is: ' + henemy);
}