CREATE TABLE testjob_list (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    job_id VARCHAR(100),
	  company_name TEXT,
    job_title TEXT,
    job_description Text,
    is_remote BOOLEAN,
    registered_office TEXT,
    posted_date TIMESTAMP,
	  job_url TEXT,
);

INSERT INTO testjob_list (job_id, company_name, job_title, job_description, is_remote, registered_office, posted_date, job_url)
VALUES
    ('123456', 'TechCorp', 'Software Engineer', 'We are seeking a skilled Software Engineer...', true, '123 Tech Street, Anytown, USA', '2023-08-13 10:00:00', 'https://example.com/job/123456'),
    ('789012', 'DataCo', 'Data Analyst', 'DataCo is looking for a detail-oriented Data Analyst...', false, '456 Data Avenue, Big City, USA', '2023-08-14 09:30:00', 'https://example.com/job/789012'),
    ('345678', 'AdvertiseNow', 'Marketing Specialist', 'Join our team as a Marketing Specialist and help us promote...', true, '789 Advertise Lane, Marketingville, USA', '2023-08-14 14:15:00', 'https://example.com/job/345678'),
    ('567890', 'InnovateTech', 'Product Manager', 'InnovateTech is seeking an experienced Product Manager...', false, '123 Innovation Road, Techtopia, USA', '2023-08-15 11:45:00', 'https://example.com/job/567890');



