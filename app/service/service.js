export const fetchCompanyList = async () => {
    const url = 'http://103.129.115.165:5000/api/Company/List';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA5LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiQWRtaW5BY2Nlc3MiOnRydWUsImFwcF9tZXRhZGF0YSI6IiIsImV4cCI6MTczNjE4NjQ1NCwiaXNzIjoiR2VuUE9TIn0.f1n7YRDDrnJQ_iy9zSLBp9wgBU2FnIdpPgome7a6Xcc';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify({
            searchGroupId: 0,
            searchCompanyName: null,
            searchVatNumber: null,
            searchActiveId: 0,
            page: 1,
            pageSize: 25,
            availablePageSizes: ['15', '25', '50', '100'],
            draw: null,
            start: 0,
            length: 15,
        }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};

//   fetchCompanyList()
//     .then(data => console.log(data))
//     .catch(error => console.error('There was a problem with the fetch operation:', error));
