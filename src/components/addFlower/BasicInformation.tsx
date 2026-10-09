import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputComponent from '../common/Input';
import { addFlowerFieldLimits, addFlowerLabels, placeholders } from '../../constants/mainInfo';

export function BasicInformation() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>{addFlowerLabels.basicInformation}</Text>

      <Text style={styles.label}>{addFlowerLabels.listingTitle}</Text>
      <InputComponent
        placeholderValue={placeholders.listingTitle}
        variant="outlined"
        maxLength={addFlowerFieldLimits.listingTitle}
        style={styles.field}
      />

      <Text style={styles.label}>{addFlowerLabels.description}</Text>
      <InputComponent
        placeholderValue={placeholders.description}
        variant="outlined"
        multiline
        maxLength={addFlowerFieldLimits.description}
        style={styles.descriptionField}
      />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>{addFlowerLabels.price}</Text>
          <InputComponent
            placeholderValue={placeholders.price}
            variant="outlined"
            icon={<Text style={styles.currency}>{addFlowerLabels.currencySymbol}</Text>}
            inputMode="decimal"
            maxLength={addFlowerFieldLimits.price}
            style={styles.field}
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>{addFlowerLabels.stockQuantity}</Text>
          <InputComponent
            placeholderValue={placeholders.stockQuantity}
            variant="outlined"
            inputMode="numeric"
            maxLength={addFlowerFieldLimits.stockQuantity}
            style={styles.field}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: '#171A1F',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    color: '#565D6D',
    marginTop: 16,
  },
  field: {
    width: '100%',
  },
  descriptionField: {
    width: '100%',
    height: 120,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  column: {
    flex: 1,
  },
  currency: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    color: '#171A1F',
  },
});
