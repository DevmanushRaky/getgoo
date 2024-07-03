import { useState, useEffect } from "react";
import { FaImage } from "react-icons/fa6";
import Modal from "react-modal";

// Ensure the modal is accessible for screen readers
Modal.setAppElement("#root");

const Response = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="col-md-6"
            style={{ backgroundColor: "#FFFFFF", padding: 26 }}
          >
            <div className="row">
              <p>
                <b>Personal Information </b>
              </p>
            </div>
            <div className="row">
              <ul
                style={{ listStyle: "none", fontWeight: "500", lineHeight: 2 }}
              >
                <li>Name:</li>
                <li>Email:</li>
                <li>Address:</li>
                <li>Phone Number:</li>
                <li>Alternate Phone Number:</li>
              </ul>
              <div className="col-md-6">
                <div className="adhar-images">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <br />
          <br />
          <div
            className="col-md-6 mt-4"
            style={{ backgroundColor: "#FFFFFF", padding: 26 }}
          >
            <div className="row">
              <p>
                <b>Vehicle Information </b>
              </p>
            </div>
            <div className="row">
              <ul
                style={{ listStyle: "none", fontWeight: "500", lineHeight: 2 }}
              >
                <li>Vehicle Type:</li>
                <li>Vehicle Number:</li>
                <li>Vehicle Model:</li>
                <li>Vehicle Type:</li>
                <li>Provider Type:</li>
                <li>Vehicle Fuel Type:</li>
                <li>Engine Type:</li>
                <li>Baggage Capacity:</li>
              </ul>
              <div className="col-md-9">
                <div className="row" style={{ gap: 30 }}>
                  <div
                    className="col-md-4"
                    style={{
                      height: 135,
                      width: 120,
                      backgroundColor: "#D9D9D9",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaImage />
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      height: 135,
                      width: 120,
                      backgroundColor: "#D9D9D9",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaImage />
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      height: 135,
                      width: 120,
                      backgroundColor: "#D9D9D9",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaImage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="buttons-group" style={{ marginBottom: 100 }}>
              <button className="edit-btn">Edit</button>
              <button className="submit-btn">Done</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal-content">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Terms and Conditions"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              height: "649px",
              width: "700px",
              backgroundColor: "#FFFFFF",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
            },
            overlay: {
              zIndex: 1000,
            },
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <p>
              <b style={{ color: "#314AFF" }}>Terms and Conditions</b>
            </p>
          </div>
          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              paddingRight: 15 /* Add padding to avoid scrollbar overlapping text */,
            }}
          >
            <p style={{ fontSize: 14 }}>
              <b>Your Agreement</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus corrupti aliquam, consectetur, dignissimos tenetur
              unde eum quos labore commodi voluptatibus, ex corporis?
              Consequuntur recusandae ipsum asperiores? Adipisci at, iure odit
              sequi fugiat aspernatur soluta voluptatibus, totam veniam
              recusandae incidunt repellat. Ratione praesentium amet eos ducimus
              perferendis repellat distinctio. Eveniet rerum iure ratione,
              commodi qui, ipsam tempore, dolorum magni autem repudiandae vero
              enim quibusdam delectus voluptas explicabo culpa quidem! Officia
              laudantium iste hic corporis expedita consectetur illo, tempore,
              quisquam perspiciatis quis optio neque dolorem. Aut commodi ab
              esse? Fugiat maxime est eum et. Tempora, voluptas voluptatem
              repudiandae facilis veritatis maxime dolor exercitationem eaque.
              Repudiandae veritatis explicabo sint iure error laborum
              distinctio. Quod, exercitationem perspiciatis fugiat atque
              aliquam, a, ratione eaque rerum perferendis sequi delectus neque
              pariatur assumenda explicabo ab maxime illo eligendi magnam!
              Consequatur, deleniti ut. Maxime culpa in fugit laborum voluptate,
              recusandae soluta, facere facilis laboriosam atque consequuntur
              placeat delectus iusto aut sint. Eos, quisquam praesentium.
              Tenetur iusto debitis corporis omnis illo vero dolore est
              necessitatibus itaque esse. Delectus numquam, voluptate, commodi
              dolores nihil totam earum magni laborum modi qui inventore culpa
              sint, perferendis ea voluptatum ratione voluptatibus eveniet
              incidunt blanditiis. Autem fugiat quis soluta magnam, consequatur
              quia doloribus quidem recusandae error nisi voluptates mollitia
              saepe ratione quibusdam aperiam quae blanditiis quaerat alias,
              odio exercitationem maxime temporibus. Provident voluptatem
              deleniti repellat esse, tempora porro! Repellat perferendis ipsum
              iusto eligendi? Amet obcaecati cumque magni nisi vero suscipit eos
              libero facere saepe provident perferendis tempore eveniet odio
              praesentium nihil expedita, quam fugiat, autem, quis eius
              similique. Ducimus eius ex nulla repellat voluptatum est ullam
              consequatur dicta perspiciatis rem! Facilis nihil ex culpa laborum
              obcaecati sunt voluptate amet odit neque provident sed similique
              illo eos velit, commodi consequatur delectus officiis iste nobis
              consequuntur voluptatibus eius labore sint quia? Magnam dicta
              necessitatibus, odit magni dolorum vitae velit nisi est omnis
              libero, molestiae a aperiam saepe fugit harum error eaque
              dignissimos dolores voluptatibus maxime nam facilis! Possimus
              dolorum fuga corporis necessitatibus molestiae debitis dicta
              reprehenderit voluptates beatae vel fugiat neque repudiandae
              numquam, natus dolores culpa quaerat. Dolores, molestias animi!
              Sit nostrum provident officia accusantium laborum perspiciatis
              accusamus qui porro laudantium eligendi eveniet, consequuntur odit
              commodi dolorem voluptatum corporis? Voluptatem qui perspiciatis
              quod nihil eos magnam ad, sequi debitis laboriosam officiis.
              Corrupti voluptate vero vel, ea nemo aperiam iure libero, eos esse
              debitis, quae porro! Aperiam dolor corrupti sed voluptate
              explicabo est eius nulla mollitia obcaecati aliquid! Asperiores
              exercitationem quam magnam laudantium sunt! Ipsa cumque, assumenda
              deleniti voluptatum possimus ducimus at excepturi nihil modi quod,
              esse asperiores qui autem? O
            </p>
          </div>
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "5px 20px",
              marginRight: 30,
            }}
          >
            <button onClick={closeModal} style={{ marginRight: 10 }}>
              Agree
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Response;
