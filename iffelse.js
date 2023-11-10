let name = prompt ("bạn là ai ?")
if ( name == 'vu' ) {
    let pass = prompt('password?')
    if ( pass == ( 'boypho') ) {
        alert( 'Chào đại ca' ) ;
    }else if ( pass == 'hieu' ) {
        alert( 'canceled' );
    }else {
        alert( 'wrong password' );
    }
}else if ( name == 'hieu' ) {
    alert('canceled');
}else {
    alert('tao deo biet may la ai')
}