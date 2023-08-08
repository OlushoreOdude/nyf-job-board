--psql -U your_username -d cyf -f create_job_table.sql

-- Create the job table
CREATE TABLE job (
    job_id SERIAL PRIMARY KEY,
    job_title TEXT NOT NULL,
    company_name TEXT NOT NULL,
    hired_from_cyf BOOLEAN NOT NULL,
    job_location TEXT NOT NULL,
    work_arrangement TEXT NOT NULL,
    work_experience TEXT NOT NULL,
    description TEXT NOT NULL,
    deadline_date DATE,
    url TEXT,
    salary INT
);

-- Insert sample data
INSERT INTO job (
    job_title,
    company_name,
    hired_from_cyf,
    job_location,
    work_arrangement,
    work_experience,
    description,
    deadline_date,
    url,
    salary
)
VALUES
    (
        'Software Engineer',
        'Acme Corporation',
        true,
        'New York, NY',
        'Remote',
        'Entry Level',
        'We are seeking a skilled Software Engineer to join our dynamic team...',
        '2023-08-15',
        'https://example.com/job-posting',
        75000
    ),
    (
        'Data Analyst',
        'Tech Solutions Inc.',
        false,
        'San Francisco, CA',
        'In-Person',
        'Mid-Level',
        'Join our data team and analyze complex datasets to drive business insights...',
        '2023-08-30',
        'https://example.com/data-analyst-job',
        60000
    ),
    (
        'Product Manager',
        'InnovateTech',
        true,
        'Remote',
        'Remote',
        'Senior Level',
        'Lead product development and innovation initiatives with a diverse team...',
        '2023-09-10',
        'https://example.com/product-manager-opening',
        90000
    );
