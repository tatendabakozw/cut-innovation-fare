import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Select,
  Input,
} from "@chakra-ui/react";

type Props = {};

const PaymentModal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <span
        onClick={onOpen}
        className="bg-blue-900 text-white cursor-pointer hover:bg-blue-800 rounded-full text-center px-3 py-1 text-sm"
      >
        Pay Online
      </span>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pay For Event ($12000)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className=" text-slate-500 pb-1">Payment Method</p>
            <Select>
              <option value="ecocash">Ecocash</option>
              <option value="one_money">One Money</option>
            </Select>
            <p className=" text-slate-500 pt-8 pb-1">Phone Number</p>
            <Input placeholder="Phone number" />
            <p className=" text-slate-500 pt-8 pb-1">Email</p>
            <Input placeholder="Phone number" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Pay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentModal;
