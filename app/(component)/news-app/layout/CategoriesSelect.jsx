import React from 'react'

export default function CategoriesSelect({handelSelectCategory , categorie}) {
  const categories = [
    { name: 'General', value: 'general' },
    { name: 'Business', value: 'business' },
    { name: 'Entertainment', value: 'entertainment' },
    { name: 'Health', value: 'health' },
    { name: 'Science', value: 'science' },
    { name: 'Sports', value: 'sports' },
    { name: 'Technology', value: 'technology' }
  ];
  return (
    <div className='col-12 col-md-4'>
      <select className="form-select p-3" value={categorie} onChange={handelSelectCategory}>
        {
          categories.map(({ name, value }) => <option key={name + Math.random()} value={value}>{name}</option>)
        }
      </select>
    </div>
  )
}
