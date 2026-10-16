import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CircleCheck } from 'lucide-react-native';
import { ActionButton } from '../common/ActionButton';
import { buttonNames } from '../../constants/buttonNames';

type ListingActionsProps = {
  onSaveDraft?: () => void;
  onPublish?: () => void;
};

export function ListingActions({ onSaveDraft, onPublish }: ListingActionsProps) {
  return (
    <View style={styles.footer}>
      <ActionButton label={buttonNames.saveDraft} variant="outlined" onPress={onSaveDraft} style={styles.draftButton} />
      <ActionButton
        label={buttonNames.publishListing}
        icon={<CircleCheck size={20} color="#FFFFFF" />}
        onPress={onPublish}
        style={styles.publishButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F5',
  },
  draftButton: {
    flex: 1,
  },
  publishButton: {
    flex: 1.75,
  },
});
