import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputComponent from '../common/Input';
import { Typography } from '../common/Typography';
import { addFlowerFieldLimits, addFlowerLabels, placeholders } from '../../constants/mainInfo';

export function BasicInformation() {
  return (
    <View style={styles.wrapper}>
      <Typography variant="sectionTitle">{addFlowerLabels.basicInformation}</Typography>

      <Typography variant="body2" style={styles.label}>
        {addFlowerLabels.listingTitle}
      </Typography>
      <InputComponent
        placeholderValue={placeholders.listingTitle}
        variant="outlined"
        maxLength={addFlowerFieldLimits.listingTitle}
        style={styles.field}
      />

      <Typography variant="body2" style={styles.label}>
        {addFlowerLabels.description}
      </Typography>
      <InputComponent
        placeholderValue={placeholders.description}
        variant="outlined"
        multiline
        maxLength={addFlowerFieldLimits.description}
        style={styles.descriptionField}
      />

      <View style={styles.row}>
        <View style={styles.column}>
          <Typography variant="body2" style={styles.label}>
            {addFlowerLabels.price}
          </Typography>
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
          <Typography variant="body2" style={styles.label}>
            {addFlowerLabels.stockQuantity}
          </Typography>
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
  label: {
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
