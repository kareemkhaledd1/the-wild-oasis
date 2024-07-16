import Button from "../../ui/Button.tsx";
import Modal from "../../ui/Modal.tsx";
import CreateCabinForm from "./CreateCabinForm.tsx";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// const AddCabins = () => {
//   const [siShowModal, setIsShowModal] = useState(false);
//
//   return (
//     <div>
//       <Button onClick={() => setIsShowModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {siShowModal && (
//         <Modal onClose={() => setIsShowModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsShowModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
