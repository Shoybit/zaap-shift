import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const { register, handleSubmit, watch } = useForm();
    const serviceCenters = useLoaderData();

    // Unique regions
    const regions = [...new Set(serviceCenters.map(c => c.region))];

    // Watch selected regions
    const selectedSenderRegion = watch('senderRegion');
    const selectedReceiverRegion = watch('receiverRegion');

    // Filter districts based on watched region
    const senderDistricts = serviceCenters
        .filter(c => c.region === selectedSenderRegion)
        .map(c => c.district);

    const receiverDistricts = serviceCenters
        .filter(c => c.region === selectedReceiverRegion)
        .map(c => c.district);

    const handleSendParcel = data => {
        console.log('Form Data:', data);
        alert('Parcel information submitted! Check console for details.');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12">Send A Parcel</h2>

                <form onSubmit={handleSubmit(handleSendParcel)} className='bg-white p-8 rounded-lg shadow-lg'>

                    {/* Document Type */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Document Type</h3>
                        <div className="flex gap-6">
                            <label className="flex items-center space-x-2">
                                <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                                <span className="text-lg">Document</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" {...register('parcelType')} value="non-document" className="radio" />
                                <span className="text-lg">Non-Document</span>
                            </label>
                        </div>
                    </div>

                    {/* Parcel Information */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                        <div className="space-y-2">
                            <label className="label text-lg font-medium">Parcel Name</label>
                            <input type="text" {...register('parcelName')} className="input input-bordered w-full" placeholder="Enter parcel name" />
                        </div>
                        <div className="space-y-2">
                            <label className="label text-lg font-medium">Parcel Weight (kg)</label>
                            <input type="number" {...register('parcelWeight')} className="input input-bordered w-full" placeholder="Enter weight in kg" />
                        </div>
                    </div>

                    {/* Sender & Receiver */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* Sender */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold border-b-2 pb-2">Sender Details</h4>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Sender Name</label>
                                <input type="text" {...register('senderName')} className="input input-bordered w-full" placeholder="Sender Name" />
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Sender Email</label>
                                <input type="email" {...register('senderEmail')} className="input input-bordered w-full" placeholder="Sender Email" />
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Sender Region</label>
                                <select {...register('senderRegion')} className="select select-bordered w-full">
                                    <option value="">Select a region</option>
                                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Sender District</label>
                                <select {...register('senderDistrict')} className="select select-bordered w-full">
                                    <option value="">Select a district</option>
                                    {senderDistricts.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Sender Address</label>
                                <input type="text" {...register('senderAddress')} className="input input-bordered w-full" placeholder="Full address" />
                            </div>
                        </div>

                        {/* Receiver */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold border-b-2 pb-2">Receiver Details</h4>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Receiver Name</label>
                                <input type="text" {...register('receiverName')} className="input input-bordered w-full" placeholder="Receiver Name" />
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Receiver Email</label>
                                <input type="email" {...register('receiverEmail')} className="input input-bordered w-full" placeholder="Receiver Email" />
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Receiver Region</label>
                                <select {...register('receiverRegion')} className="select select-bordered w-full">
                                    <option value="">Select a region</option>
                                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Receiver District</label>
                                <select {...register('receiverDistrict')} className="select select-bordered w-full">
                                    <option value="">Select a district</option>
                                    {receiverDistricts.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="label text-lg font-medium">Receiver Address</label>
                                <input type="text" {...register('receiverAddress')} className="input input-bordered w-full" placeholder="Full address" />
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="text-center mt-12">
                        <button type="submit" className="btn btn-primary btn-lg px-12 py-4 text-white text-xl font-bold">
                            Send Parcel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SendParcel;
