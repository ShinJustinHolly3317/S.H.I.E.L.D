module.exports = {
  errorHandler: (err, req, res) => {
    console.log('[error handler]', err);

    return res.status(500).json({
      message: 'internal error'
    })
  }
}