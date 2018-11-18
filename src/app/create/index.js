import {buildInterface, add_minor_elements} from '../../lib/components/interface/build-interface';
import '../../styles.css';
import {MyMessage} from "../../lib/components/message";
//import buildInterface from '../../lib/components/interface/build-interface'
//import add_minor_elements from '../../lib/components/interface/build-interface'


customElements.define('my-message', MyMessage);

const getReadableSize = function(size){
    let i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};
//alert('10000='+getReadableSize(10000));
buildInterface();
add_minor_elements();
