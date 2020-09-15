import React from 'react';
import styled from 'styled-components';

const EventForm = () => {
  return (
    <EventFormContainer>
      <TitleLabel htmlFor="title">Title:</TitleLabel>
      <TitleInput type="text" name="title" required />

      <StartDtLabel htmlFor="startDt">Start Date:</StartDtLabel>
      <StartDtInput type="date" name="startDt" required />

      <EndDtLabel htmlFor="endDt">End Date:</EndDtLabel>
      <EndDtInput type="date" name="endDt" required />

      <BeginsLabel htmlFor="begins">Begins:</BeginsLabel>
      <BeginsInput type="time" name="begins" />

      <EndsLabel htmlFor="ends">Ends:</EndsLabel>
      <EndsInput type="time" name="ends" />

      <PeopleLabel htmlFor="people">People:</PeopleLabel>
      <PeopleInput type="text" name="people" />

      <LocationLabel htmlFor="location">Location:</LocationLabel>
      <LocationInput type="text" name="location" />

      <DescriptionLabel htmlFor="description">Description:</DescriptionLabel>
      <DescriptionInput type="text" name="description" />

      <AddEventButton>Add Event</AddEventButton>
    </EventFormContainer>
  );
};

export default EventForm;

const EventFormContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-template-columns: 18% 32% 18% 32%;
  row-gap: 5%;
  column-gap: 0.5rem;
  align-items: center;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 60px;

  @media (max-width: 650px) {
    grid-template-columns: 30% 70%;
    grid-template-rows: repeat(9, auto);
  }

  label {
    font-weight: 600;
  }

  input {
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 5px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const TitleLabel = styled.label`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const TitleInput = styled.input`
  grid-row: 1/2;
  grid-column: 2/span 3;

  @media (max-width: 650px) {
    grid-column: 2/3;
  }
`;

const StartDtLabel = styled.label`
  grid-row: 2/3;
  grid-column: 1/2;
`;

const StartDtInput = styled.input`
  grid-row: 2/3;
  grid-column: 2/3;

  @media (max-width: 650px) {
    grid-column: 2/3;
  }
`;

const EndDtLabel = styled.label`
  grid-row: 2/3;
  grid-column: 3/4;
  justify-self: end;

  @media (max-width: 650px) {
    grid-row: 3/4;
    grid-column: 1/2;
    justify-self: start;
  }
`;

const EndDtInput = styled.input`
  grid-row: 2/3;
  grid-column: 4/5;

  @media (max-width: 650px) {
    grid-row: 3/4;
    grid-column: 2/3;
  }
`;

const BeginsLabel = styled.label`
  grid-row: 3/4;
  grid-column: 1/2;

  @media (max-width: 650px) {
    grid-row: 4/5;
    grid-column: 1/2;
  }
`;

const BeginsInput = styled.input`
  grid-row: 3/4;
  grid-column: 2/3;

  @media (max-width: 650px) {
    grid-row: 4/5;
    grid-column: 2/3;
  }
`;

const EndsLabel = styled.label`
  grid-row: 3/4;
  grid-column: 3/4;
  justify-self: end;

  @media (max-width: 650px) {
    grid-row: 5/6;
    grid-column: 1/2;
    justify-self: start;
  }
`;

const EndsInput = styled.input`
  grid-row: 3/4;
  grid-column: 4/5;

  @media (max-width: 650px) {
    grid-row: 5/6;
    grid-column: 2/3;
  }
`;

const PeopleLabel = styled.label`
  grid-row: 4/5;
  grid-column: 1/2;

  @media (max-width: 650px) {
    grid-row: 6/7;
    grid-column: 1/2;
  }
`;

const PeopleInput = styled.input`
  grid-row: 4/5;
  grid-column: 2/span 3;

  @media (max-width: 650px) {
    grid-row: 6/7;
    grid-column: 2/3;
  }
`;

const LocationLabel = styled.label`
  grid-row: 5/6;
  grid-column: 1/2;

  @media (max-width: 650px) {
    grid-row: 7/8;
    grid-column: 1/2;
  }
`;

const LocationInput = styled.input`
  grid-row: 5/6;
  grid-column: 2/span 3;

  @media (max-width: 650px) {
    grid-row: 7/8;
    grid-column: 2/3;
  }
`;

const DescriptionLabel = styled.label`
  grid-row: 6/7;
  grid-column: 1/2;

  @media (max-width: 650px) {
    grid-row: 8/9;
    grid-column: 1/2;
  }
`;

const DescriptionInput = styled.input`
  grid-row: 6/7;
  grid-column: 2/span 3;

  @media (max-width: 650px) {
    grid-row: 8/9;
    grid-column: 2/3;
  }
`;

const AddEventButton = styled.button`
  grid-row: 7/8;
  grid-column: 1/span 4;
  justify-self: center;
  height: 40px;
  width: 180px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #188665;
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 1rem;

  @media (max-width: 650px) {
    grid-row: 9/10;
    grid-column: 1/span 2;
    margin-bottom: 130px;
  }
`;
