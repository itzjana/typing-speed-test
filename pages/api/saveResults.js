export default function handler(req, res) {
    if (req.method === 'POST') {
      const { wordsPerMinute, accuracy } = req.body;
      // Save the results to your database or an external service
      res.status(200).json({ message: 'Results saved successfully' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  