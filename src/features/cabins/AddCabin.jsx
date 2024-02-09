import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window
          name="cabin-form"
          render={(close) => <CreateCabinForm onCloseModal={close} />}
        ></Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [showisOpenModal, setShowisOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowisOpenModal((show) => !show)}>
//         Add new Form
//       </Button>
//       {showisOpenModal && (
//         <Modal onCloseModal={() => setShowisOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setShowisOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
