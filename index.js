import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const DANH_SACH_KY_NANG = [
  { id: '1', ten: 'React Native' },
  { id: '2', ten: 'JavaScript' },
  { id: '3', ten: 'Thiết kế UI/UX' },
  { id: '4', ten: 'Làm việc nhóm' },
  { id: '5', ten: 'Nấu ăn ngon 🍳' },
  { id: '6', ten: 'Lắng nghe và thấu hiểu người khác' },
  { id: '7', ten: 'Kiểm soát cảm xúc' },
  { id: '8', ten: 'Thích nghi với môi trường mới' },
  { id: '9', ten: 'Giải quyết vấn đề' },
  { id: '10', ten: 'Giao tiếp' },
];

export default function ProfileScreen() {
  
const hienThiKyNang = ({ item }: { item: any }) => (
    <View style={styles.itemBox}>
      <Text style={styles.itemText}>{item.ten}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/736x/cc/27/42/cc274277fb45404f093ba001bd1b95d1.jpg' }} 
      style={styles.avatar} />
      <Text style={styles.name}>Nguyễn Quốc Thịnh</Text>
      <Text style={styles.bio}>Sinh viên ĐHKH</Text>
      
      <Text style={styles.sectionTitle}>Kỹ năng của tôi:</Text>
      
      <FlatList
        data={DANH_SACH_KY_NANG}           
        renderItem={hienThiKyNang}        
        keyExtractor={item => item.id}    
        style={{ width: '100%' }}        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',     
    paddingTop: 60, 
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120, height: 120, borderRadius: 60, marginBottom: 20,
  },
  name: {
    fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8,
  },
  bio: {
    fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10,
  },
  itemBox: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16, color: '#006064', fontWeight: '500',
  }
});
