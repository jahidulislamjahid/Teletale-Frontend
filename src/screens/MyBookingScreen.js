import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../components/Navbar/Navbar";
import useAuth from "../hooks/useAuth";
import useLoading from "../hooks/useLoading";

const MyBookingScreen = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const spinner = useLoading();
  const history = useHistory();

  useEffect(() => {
    fetch("https://teletale-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) =>
        setMyBookings(data.filter((item) => item.data.email === user.email))
      );
  }, [user.email]);

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  //delete bookings
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure to delete this booking ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://teletale-server.vercel.app/bookings/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              swal("Poof! Booking has been deleted", {
                icon: "success",
              });
              const restBookings = myBookings.filter(({ _id }) => _id !== id);
              setMyBookings(restBookings);
            }
          });
      } else {
        swal("Booking hasn't deleted.You booking is stay here!!");
      }
    });
  };

  return (
    <div>
      <Navbar bg="bg-gray-300" textColor="text-black" width="max-w-screen-xl" />

      <main className=" my-12">
        <section className="my-24 max-w-screen-xl mx-auto px-6">
          <div>
            <p className=" text-gray-900 font-semibold text-5xl text-center ">
              my bookings
            </p>
            <hr className=" mt-8" />
            <hr className=" my-4 mx-auto" style={{ width: "50%" }} />
          </div>
          <div className="">
            {loading ? (
              spinner
            ) : (
              <>
                {myBookings.length > 0 ? (
                  <>
                    <div className="col-span-3 flex flex-col space-y-3">
                      {myBookings.map(({ _id, bookings, data }) => {
                        return (
                          <div
                            key={bookings._id}
                            className="grid grid-cols-1 lg:grid-cols-4 gap-10 bg-white rounded-lg shadow-xl p-6 box-border"
                          >
                            {/* {/_ image _/} */}
                            <div className="col-span-1">
                              <img
                                className="w-full h-full rounded-lg"
                                src={bookings.image}
                                alt={bookings.title}
                              />
                            </div>
                            {/* {/_ details _/} */}
                            <div className="col-span-2">
                              <h1 className="text-gray-700 text-lg font-primary">
                                {bookings.title}
                              </h1>
                              <p className="text-gray-500 text-sm">
                                {bookings.description}
                              </p>
                              {/* {/_ others info _/} */}
                              <div className="flex flex-col lg:flex-row items-start lg:space-x-12 py-4 space-y-4 lg:items-center">
                                {/* {/_ status _/} */}
                                <div className="flex items-center space-x-3">
                                  <div className="flex flex-col">
                                    <span
                                      className={`${data.status === "pending"
                                        ? "bg-yellow-500"
                                        : "bg-green-600"
                                        } text-white px-4 py-1 rounded-full font-primary text-sm`}
                                    >
                                      {data.status}
                                    </span>
                                  </div>
                                </div>
                                {/* {/_ duration _/} */}
                                <div className="flex items-center space-x-3">
                                  <MdPhoneIphone className="text-red-500 text-xl" />
                                  <div className="flex flex-col">
                                    <p className="text-sm font-primary text-gray-700">
                                      Design
                                    </p>
                                    <span className="text-sm text-gray-500">
                                      {bookings.duration}
                                    </span>
                                  </div>
                                </div>
                                {/* {/_ group _/} */}
                                <div className="flex items-center space-x-3">
                                  <MdProductionQuantityLimits className="text-red-500 text-2xl" />
                                  <div className="flex flex-col">
                                    <p className="text-sm font-primary text-gray-700">
                                      Availability
                                    </p>
                                    <span className="text-sm text-gray-500">
                                      {bookings.groupMembers} pcs
                                    </span>
                                  </div>
                                </div>
                                {/* {/_ price _/} */}
                                <div>
                                  <h1 className="font-primary font-semibold text-gray-900 text-2xl">
                                    ${bookings.price}
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-1 flex items-center lg:justify-end">
                              <button
                                className="btn-primary px-4 w-36 mr-auto lg:ml-auto"
                                onClick={() => handleDelete(_id)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="h-96 space-y-6 flex items-center justify-center flex-col">
                    <img src="../../assets/box.png" alt="no order" />
                    <button
                      className="btn-primary px-6"
                      onClick={() => history.push("/explore")}
                    >
                      Book Now
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyBookingScreen;
