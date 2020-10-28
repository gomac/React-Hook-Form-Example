import React from "react";
import { Button, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MultLineTextField } from "./FormFields";
import { useForm, Controller } from "react-hook-form";

const { width } = Dimensions.get("window");

const Requirements = (props) => {
  const { handleSubmit, errors, control } = useForm();

  /*   useEffect(() => {
    console.log('SUBMIT: props.newRequirement ', props.newRequirement);
    console.log('Render Called', errors);
  }); */

  console.log("errors ", errors);
  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={100}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[width, styles.container]}>
        <ScrollView keyboardShouldPersistTaps={"handled"}>
          <Controller
            as={<MultLineTextField />}
            value={props.newRequirement}
            {...props}
            name="newRequirement"
            control={control}
            defaultValue={props.newRequirement}
            rules={{ required: "This is required" }}
            placeholder="Enter requirements here"
            onChangeText={(newRequirement) =>
              props.setNewRequirement(newRequirement)
            }
            error={errors.newRequirement && errors.newRequirement.message}
          />
          <MultLineTextField
            {...props}
            value={props.newInstructions}
            onChangeText={(newInstructions) =>
              props.setNewInstructions(newInstructions)
            }
            placeholder="Enter skills and experience of applicant"
          />
          <Button
            onPress={handleSubmit(onSubmit)}
            title={"Sub"}
            label="Submit"
          />
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  row: {
    height: 48,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  multilineBox: {
    alignSelf: "center",
    maxHeight: 300,
    borderColor: "#1ca0ff",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 10,
    width: "90%"
  },
  item: {
    padding: 10,
    fontSize: 13,
    height: 44
  }
});

export default Requirements;
