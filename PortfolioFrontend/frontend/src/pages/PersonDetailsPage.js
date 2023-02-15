import React, { Fragment, useEffect } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { GetPersonDetails } from '../redux/actions/PersonActions'
import { useParams } from 'react-router-dom'
import ProfileDetail from '../components/breadcrumb/ProfileDetail'

const PersonDetailsPage = () => {
    let { id } = useParams();
    const getPersonDetails = useSelector((state) => state.getPersonDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetPersonDetails(id))
    }, [dispatch,id])
   

  return (
    <Fragment>
        <MainLayout>
            <div className='container'>
                <ProfileDetail />
   
            {id}
            <h2>{getPersonDetails.person.id}</h2>
            <h2>{getPersonDetails.person.name}</h2>
            
            {getPersonDetails.person.personAbilities.map((personAbility) => (
                <>
                <h6>{personAbility.abilityId}</h6>
                <a>{personAbility.ability.name}</a>
                </>
            ))}
            <hr />
            <h4 className='text-center my-5'>Projects</h4>
            <div class="row mb-2">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">World</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Featured post</a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" width={200} height={250}  src='https://images.pexels.com/photos/5713390/pexels-photo-5713390.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="Card image cap" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">Design</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Post title</a>
              </h3>
              <div class="mb-1 text-muted">Nov 11</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" width={200} height={250}  src='https://images.pexels.com/photos/5713390/pexels-photo-5713390.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'  alt="Card image cap" />
          </div>
        </div>
      </div>
    
            </div>
        </MainLayout>
    </Fragment>
  )
}

export default PersonDetailsPage