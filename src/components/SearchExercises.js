import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ( {setExercises, bodyPart, setBodyPart } ) => {

    const [ search, setSearch ] = useState('');
    const [ bodyParts, setBodyParts ] = useState([]);

    useEffect(()=>{
        const fetchExerciseData = async () => {

            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all',...bodyPartsData])
        }

        fetchExerciseData()
    },[])


    const handleSearch = async () => {
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exerciseData.filter(
                (exercise)=> exercise.name.toLocaleLowerCase().includes(search)
            ||  exercise.target.toLocaleLowerCase().includes(search)
            ||  exercise.equipment.toLocaleLowerCase().includes(search)
            ||  exercise.bodyPart.toLocaleLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography id="searchbox" fontWeight={700} sx={{ fontSize: { lg: '34px', xs: '20px' } }} mb="49px" textAlign="center" color='#D9CAB3'>
        Select a category of exercise <br /> or search the muscle you want to grow!
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '970px', xs: '150px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#4C6793', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} href="#exercises">
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises