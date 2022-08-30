/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from '@chakra-ui/react';
import VocabularyItem from 'components/VocabylaryItem';
export default function Index({ isOpen, onClose, vocabulary }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent pb="12px">
        <ModalHeader>Vocabulary</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VocabularyItem vocabulary={vocabulary} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
