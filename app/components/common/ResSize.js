import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
export default ResSize = (value) => RFValue(value, width)
