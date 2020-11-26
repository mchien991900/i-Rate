import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import * as Yup from 'yup';
import * as SQLite from 'expo-sqlite';
import {init} from './db/data'




const RatingSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  type: Yup.string()
    .required('Required'),
  date_visited: Yup.string()
    .required('Required'),
  price_range: Yup.number()
    .required('Required'),
  rating: Yup.string()
    .required('Required'),
  reporter: Yup.string()
    .required('Required'),
});


function Input ({
  field,
  name,
  errors,
  touched,
  handleBlur,
  handleChange,
  ... rest
}) 
{


  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.tags}>{field}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={name}
        {...rest}
        />
      {errors[name] && touched[name]
        ? <Text style={styles.errors}>{errors[name]}</Text>
        : null
      }
    </View>
  )
}

const initialValues = {
  name: '',
  type: '',
  date_visited: '',
  price_range: '',
  rating: '',
  note: '',
  reporter: '',
};

const Rating = ({ navigation }) => {
  
  const _onSubmit = values => {
    console.log('alal',values);
  }

  const data =  init();
  console.log(data)
  
const handleSubmitOld = () => 
Alert.alert(
  "CONFIRM",
  "You confirm your rating?",
  [
    {
      text: "Dismiss",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Submit", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={_onSubmit} 
        validationSchema={RatingSchema}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
            <ScrollView contentContainerStyle={styles.content}>
              <Input
                field="Restaurant Name"
                name="name"
                placeholder="Name"
                value={values.name}
                {...{ errors, touched, handleChange, handleBlur }}
                />
              <Text style={styles.tags}>Restaurant Type</Text>
              <Picker
                selectedValue={values.type}
                style={{ width: 250}}
                
                onValueChange={(itemValue) => setFieldValue("type", itemValue)}
                >
                <Picker.Item label="Grill" value="Grill" />
                <Picker.Item label="Sea Food" value="Sea Food" />
                <Picker.Item label="Fast Food" value="Fast Food" />
              </Picker>
              <Input
                field="Date time"
                name="date_visited"
                placeholder="Date and time"
                value={values.date_visited}
                {...{ errors, touched, handleChange, handleBlur }}
                />
              <Input
                field="Average Cost ($)"
                name="price_range"
                placeholder="Price"
                value={values.price_range}
                {...{ errors, touched, handleChange, handleBlur }}
                />
              <Text style={styles.tags}>Service Rating</Text>
              <Picker
                selectedValue={values.service}
                style={{ height: 50, width: 250, marginBottom: 150 }}
                onValueChange={(itemValue) => setFieldValue("service", itemValue)}
                >
                <Picker.Item label="Need to improve" value="Need to improve" />
                <Picker.Item label="OKAY" value="OKAY" />
                <Picker.Item label="Good" value="Good" />
                <Picker.Item label="Excellent" value="Excellent" />
              </Picker>
              <Text style={styles.tags}>Cleanliness Rating</Text>
              <Picker
                selectedValue={values.cleanliness}
                style={{ height: 50, width: 250, marginBottom: 150 }}
                onValueChange={(itemValue) => setFieldValue("cleanliness", itemValue)}
                >
                <Picker.Item label="Need to improve" value="Need to improve" />
                <Picker.Item label="OKAY" value="OKAY" />
                <Picker.Item label="Good" value="Good" />
                <Picker.Item label="Excellent" value="Excellent" />
              </Picker>
              <Text style={styles.tags}>Food Quality Rating</Text>
              <Picker
                selectedValue={values.foodquality}
                style={{ height: 50, width: 250, marginBottom: 150 }}
                onValueChange={(itemValue) => setFieldValue("foodquality", itemValue)}
                >
                <Picker.Item label="Need to improve" value="Need to improve" />
                <Picker.Item label="OKAY" value="OKAY" />
                <Picker.Item label="Good" value="Good" />
                <Picker.Item label="Excellent" value="Excellent" />
              </Picker>
              <Input
                field="Notes"
                name="note"
                placeholder="Note"
                value={values.note}
                {...{ errors, touched, handleChange, handleBlur }}
                />
              <Input
                field="Reporter"
                name="reporter"
                placeholder="Reporter"
                value={values.reporter}
                {...{ errors, touched, handleChange, handleBlur }}
                />
              <TouchableOpacity
                activeOpacity={1}
                onPress={handleSubmitOld}
                style={styles.submit}
                >
                <Text style={styles.tags}>Submit</Text>
              </TouchableOpacity>
            </ScrollView>
          )
        }
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aedced',
  },
  errors: {
    fontSize: 11,
    color: '#ff0000',
  },
  input: {
    height: 40,
    borderWidth: 1
  },
  content: {
    padding: 50,
  },
  submit: {
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30
  },
  tags: {
    fontWeight: 'bold'
  }
});

export default Rating;

