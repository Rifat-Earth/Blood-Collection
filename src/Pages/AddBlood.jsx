import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBlood = () => {
  const {  register,   handleSubmit,   reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
  try {
    const res = await fetch('https://blood-collection-server.vercel.app/add-blood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

   if (result.insertedId || result.acknowledged) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Donation added successfully!',
          confirmButtonColor: '#3085d6',
        });
        reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add donation',
        });
      }

    } catch (error) {
      console.error("Submit error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Something went wrong. Try again later.',
      });
    }
  };



  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Blood Donation</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Donor Name */}
        <div>
          <label className="label">Donor Name</label>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Blood Group */}
        <div>
          <label className="label">Blood Group</label>
          <select
            {...register("bloodGroup", { required: "Blood group is required" })}
            className="select select-bordered w-full"
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A−">A−</option>
            <option value="B+">B+</option>
            <option value="B−">B−</option>
            <option value="AB+">AB+</option>
            <option value="AB−">AB−</option>
            <option value="O+">O+</option>
            <option value="O−">O−</option>
          </select>
          {errors.bloodGroup && <p className="text-red-500">{errors.bloodGroup.message}</p>}
        </div>

        {/* Age */}
        <div>
          <label className="label">Age</label>
          <input
            type="number"
            placeholder="Your Age"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Must be at least 18" },
              max: { value: 60, message: "Max age is 60" }
            })}
            className="input input-bordered w-full"
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="label">Phone Number</label>
          <input
            type="tel"
            placeholder="01XXXXXXXXX"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^01[3-9]\d{8}$/,
                message: "Invalid Bangladeshi phone number"
              }
            })}
            className="input input-bordered w-full"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            type="text"
            placeholder="City or area"
            {...register("location", { required: "Location is required" })}
            className="input input-bordered w-full"
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        </div>

        {/* Donation Date */}
        <div>
          <label className="label">Last Donation Date</label>
          <input
            type="date"
            {...register("donationDate", { required: "Date is required" })}
            className="input input-bordered w-full"
          />
          {errors.donationDate && <p className="text-red-500">{errors.donationDate.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="btn bg-red-600 text-white w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBlood;
