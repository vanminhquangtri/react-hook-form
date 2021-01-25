import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
    
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const { register, handleSubmit, errors, watch, reset } = useForm({
        mode: 'onChange'
    });

    const watchAllFields = watch();

    const onSubmit = (data) => {
        console.log(data);
        reset()
    };

    useEffect(() => {
        console.log('data', data)
    }, [data])

    return (
        <div className="container">
            <div className="row">
                <div className="col text-left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="text" name="email" className="form-control" id="inputEmail4"
                                    onChange={()=>setData(watchAllFields)}
                                    ref={register(
                                            {
                                                required: {
                                                    value: true,
                                                    message: 'Please fill email'
                                                },
                                                pattern: {
                                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{1,1000}$/g,
                                                    message: 'Please fill valid email'
                                                },
                                            }
                                        )}
                                />
                                {errors.email && errors.email.message}
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" name="password" className="form-control" id="inputPassword4" onChange={()=>setData(watchAllFields)} ref={register(
                                            {
                                                required: {
                                                    value: true,
                                                    message: 'Please fill password'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Password at least 3 characters'
                                                },
                                            }
                                        )}
                                />
                                {errors.password && errors.password.message}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" name="address" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" name="address_2" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" name="city" className="form-control" id="inputCity" />
                            </div>
                            {/* <div className="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" name="state" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div> */}
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Zip</label>
                                <input type="text" name="zip" className="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" name="agree" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ReactHookForm;